var MasteryRanksUnitParameter = defineObject(BaseUnitParameter, {
  _weapon_type_name: null,
  _type: null,

  //
  // SETUP: Called just after construction to initialize members.
  //
  setup: function (weapon_type_name) {
    var mastery_param = FIND(this, MASTERY_PARAMS, function (p) {
      return p.weapon_type_name == weapon_type_name;
    });

    if (!mastery_param) {
      return throwError003();
    }

    this._weapon_type_name = weapon_type_name;
    this._type = mastery_param.type;
  },

  //
  // GET UNIT VALUE
  //
  getUnitValue: function (unit) {
    var rank_id = 0;
    var rank_xp = 0;

    if (!unit.custom.mastery_ranks) {
      return '0;0';
    }

    var unit_stat = FIND(this, unit.custom.mastery_ranks, function (r) {
      return r.weapon_type_name == this._weapon_type_name;
    });

    if (unit_stat) {
      rank_id = unit_stat.rank_id;
      rank_xp = unit_stat.rank_xp;
    }

    return rank_id + ';' + rank_xp + ' ';
  },

  //
  // SET UNIT VALUE
  //
  setUnitValue: function (unit, value) {
    var v = value.split(';');
    var rank_id = parseInt(v[0]);
    var rank_xp = parseInt(v[1]);

    if (rank_xp < this.getMinValue()) {
      rank_xp = this.getMinValue();
    }
    else if (rank_xp > this.getMaxValue(unit)) {
      rank_xp = this.getMaxValue(unit);
    }

    if (!unit.custom.mastery_ranks) {
      unit.custom.mastery_ranks = [];
    }

    var unit_stat = FIND(this, unit.custom.mastery_ranks, function (r) {
      return r.weapon_type_name == this._weapon_type_name;
    });

    if (unit_stat) {
      unit_stat.rank_id = rank_id;
      unit_stat.rank_xp = rank_xp;
    }
    else {
      unit.custom.mastery_ranks.push({
        weapon_type_name: this._weapon_type_name,
        rank_id: 0,
        rank_xp: rank_xp
      });
    }
  },

  getParameterBonus: function (obj) {
    return 0;
  },

  getGrowthBonus: function (obj) {
    return 0;
  },

  getMaxValue: function (unit) {
    if (!unit.custom.mastery_ranks) {
      return 0;
    }

    var unit_stat = FIND(this, unit.custom.mastery_ranks, function (r) {
      return r.weapon_type_name == this._weapon_type_name;
    });

    var race_id = unit.getClass().getRaceReferenceList().getTypeData(0).getId();
    var rank = MASTERY_RANKS[unit_stat ? unit_stat.rank_id : 0];

    if (!rank) {
      return 0;
    }

    var specific_rank = FIND(this, rank.races_specifications, function (s) {
      return s.race_id == race_id && s.weapon_type_name == this._weapon_type_name;
    });

    return specific_rank ? specific_rank.xp : rank.xp;
  },

  getMinValue: function () {
    return 0;
  },

  getParameterType: function () {
    return this._type;
  },

  getSignal: function () {
    return 'Mastery ' + this._weapon_type_name;
  }
});