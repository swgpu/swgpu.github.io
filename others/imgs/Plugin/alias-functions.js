(function () {
  //
  // CONFIGURE UNIT PARAMETERS: Adds the weapon ranks as parameters.
  // The MasteryRanksUnitParameter object is defined in mastery-ranks-parameter.js
  //
  var alias00 = ParamGroup._configureUnitParameters;
  ParamGroup._configureUnitParameters = function (groupArray) {
    alias00.call(this, groupArray);

    for (var i = 0; i < MASTERY_PARAMS.length; i++) {
      var parameter = createObject(MasteryRanksUnitParameter);
      parameter.setup(MASTERY_PARAMS[i].weapon_type_name);
      groupArray.appendObject(parameter);
    }

    ParamType.COUNT = ParamType.COUNT + 2;
  };

  //
  // END VIRTUAL ATTACK: Handles the weapon experience gain with weapons
  //
  var alias01 = AttackEvaluator.TotalDamage.evaluateAttackEntry; // @todo: voir annexe a1 sur document papier.
  AttackEvaluator.TotalDamage.evaluateAttackEntry = function (virtualActive, virtualPassive, attackEntry) {
    alias01.call(this, virtualActive, virtualPassive, attackEntry);

    if (virtualActive.unitSelf.getUnitType() !== UnitType.PLAYER || virtualActive.weapon == null) {
      return;
    }

    var reward_points = 0;
    var weapon_type_name = virtualActive.weapon.getWeaponType().getName();
    var char_id = virtualActive.unitSelf.getId();
    var class_id = virtualActive.unitSelf.getClass().getId();
    var race_id = virtualActive.unitSelf.getClass().getRaceReferenceList().getTypeData(0).getId();

    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      return p.weapon_type_name == weapon_type_name;
    });

    if (!mastery_param) {
      return;
    }

    if (virtualPassive.hp <= 0) {
      reward_points = 5;
    }
    else if (!attackEntry.isHit) {
      reward_points = 1;
    }
    else if (attackEntry.isHit && !attackEntry.isCritical) {
      reward_points = 2;
    }
    else if (attackEntry.isHit && attackEntry.isCritical) {
      reward_points = 3;
    }

    var class_bonus = FIND(this, MASTERY_CLASS_BONUS, function (b) {
      return b.class_id == class_id && b.weapon_type_names.indexOf(weapon_type_name) != -1;
    });

    var race_bonus = FIND(this, MASTERY_RACE_BONUS, function (b) {
      return b.race_id == race_id && b.weapon_type_names.indexOf(weapon_type_name) != -1;
    });

    var char_bonus = FIND(this, MASTERY_CHAR_BONUS, function (b) {
      return b.char_id == char_id && b.weapon_type_names.indexOf(weapon_type_name) != -1;
    });

    if (class_bonus && virtualPassive.hp > 0) {
      reward_points += parseInt(class_bonus.amount);
    }

    if (race_bonus && virtualPassive.hp > 0) {
      reward_points += parseInt(race_bonus.amount);
    }

    if (char_bonus && virtualPassive.hp > 0) {
      reward_points += parseInt(char_bonus.amount);
    }

    var param_type = mastery_param.type;
    var value = ParamGroup.getUnitValue(virtualActive.unitSelf, param_type);

    var v = value.split(';');
    var rank_id = parseInt(v[0]);
    var rank_xp = parseInt(v[1]);
    var new_rank_xp = rank_xp + reward_points;

    ParamGroup.setUnitValue(virtualActive.unitSelf, param_type, rank_id + ';' + new_rank_xp);
    MasteryRankControl.checkRankUp(virtualActive.unitSelf, param_type, new_rank_xp, true);

    // debug start
    var d_param_value = ParamGroup.getUnitValue(virtualActive.unitSelf, param_type);
    var d_v = d_param_value.split(';');
    var d_rank_id = parseInt(d_v[0]);
    var d_rank_xp = parseInt(d_v[1]);
    var d_hit_bonus = MasteryRankControl.getParamBonus(virtualActive.unitSelf, virtualActive.weapon.getWeaponType().getName(), 'HIT');
    var d_pow_bonus = MasteryRankControl.getParamBonus(virtualActive.unitSelf, virtualActive.weapon.getWeaponType().getName(), 'POW');
    var d_crt_bonus = MasteryRankControl.getParamBonus(virtualActive.unitSelf, virtualActive.weapon.getWeaponType().getName(), 'CRT');
    root.log('-- start --');
    root.log('weapon_type_name: ' + weapon_type_name);
    root.log('weapon_rank: ' + d_rank_id + ';' + d_rank_xp);
    root.log('hit bonus for ' + virtualActive.unitSelf.getId() + ' is :' + d_hit_bonus);
    root.log('pow bonus for ' + virtualActive.unitSelf.getId() + ' is :' + d_pow_bonus);
    root.log('crt bonus for ' + virtualActive.unitSelf.getId() + ' is :' + d_crt_bonus);
    root.log('-- end --');
    // debug end
  }

  //
  // MOVE_END_FLOW: Show message at the end of the attack.
  //
  var alias02 = AttackFlow.moveEndFlow;
  AttackFlow.moveEndFlow = function () {
    var result = alias02.call(this);
    if (result == MoveResult.END) {
      MasteryRankControl.showRankUp();
    }

    return result;
  }

  //
  // GET_HIT: Add the mastery hit bonus.
  //
  var alias03 = AbilityCalculator.getHit;
  AbilityCalculator.getHit = function (unit, weapon) {
    var res = alias03.call(this, unit, weapon);
    var bonus = MasteryRankControl.getParamBonus(unit, weapon.getWeaponType().getName(), 'HIT');
    return res + bonus;
  }

  //
  // GET_POWER: Add the mastery power bonus.
  //
  var alias04 = AbilityCalculator.getPower;
  AbilityCalculator.getPower = function (unit, weapon) {
    var res = alias04.call(this, unit, weapon);
    var bonus = MasteryRankControl.getParamBonus(unit, weapon.getWeaponType().getName(), 'POW');
    return res + bonus;
  }

  //
  // GET_CRITICAL: Add the mastery critical bonus.
  //
  var alias05 = AbilityCalculator.getCritical;
  AbilityCalculator.getCritical = function (unit, weapon) {
    var res = alias05.call(this, unit, weapon);
    var bonus = MasteryRankControl.getParamBonus(unit, weapon.getWeaponType().getName(), 'CRT');
    return res + bonus;
  }
})();