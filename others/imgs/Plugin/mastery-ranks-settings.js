var MASTERY_RANKS = [{
  'name': 'Debutant',
  'xp': 50,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 50
  }]
},
{
  'name': 'Novice',
  'xp': 75,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 75
  }]
},
{
  'name': 'Intermédiaire',
  'xp': 150,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 100
  }]
},
{
  'name': 'Confirmé',
  'xp': 200,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 150
  }]
},
{
  'name': 'Expert',
  'xp': 250,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 200
  }]
},
{
  'name': 'Maitre',
  'xp': 0,
  'races_specifications': [{
    'race_id': 3,
    'weapon_type_name': 'Magie Elfique',
    'xp': 0
  }]
}];

/// Determine la perte de le gain de skill en fonction du rang d'arme et de la race

var MASTERY_SKILL_REWARDS = [{
  'rank_id': 2,
  'race_id': 0,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 0,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 0,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 1,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 1,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 1,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 2,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 2,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 2,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 4,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 4,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 4,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 5,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 5,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 5,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 6,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 6,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 6,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 2,
  'race_id': 8,
  'param_type': 15,
  'add_skill_id': 538,
  'remove_skill_id': -1
},
{
  'rank_id': 4,
  'race_id': 8,
  'param_type': 15,
  'add_skill_id': 540,
  'remove_skill_id': -1
},
{
  'rank_id': 5,
  'race_id': 8,
  'param_type': 15,
  'add_skill_id': 541,
  'remove_skill_id': -1
},
{
  'rank_id': 7,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 542,
  'remove_skill_id': -1
},
{
  'rank_id': 8,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 543,
  'remove_skill_id': -1
},
{
  'rank_id': 9,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 544,
  'remove_skill_id': -1
},
{
  'rank_id': 10,
  'race_id': 3,
  'param_type': 15,
  'add_skill_id': 545,
  'remove_skill_id': -1
}];

/// Determine la liste des types d'armes pris en compte dans le plugin.

var MASTERY_PARAMS = [{
  'weapon_type_name': 'Lames',
  'signal': 'm-Lames',
  'type': 11
},
{
  'weapon_type_name': 'Lances',
  'signal': 'm-lances',
  'type': 12
},
{
  'weapon_type_name': 'Haches',
  'signal': 'm-Haches',
  'type': 13
},
{
  'weapon_type_name': 'Masses',
  'signal': 'm-Masses',
  'type': 14
},
{
  'weapon_type_name': 'Coups',
  'signal': 'm-Coups',
  'type': 15
},
{
  'weapon_type_name': 'Arcs',
  'signal': 'm-Arcs',
  'type': 16
},
{
  'weapon_type_name': 'Arbalètes',
  'signal': 'm-Arbalettes',
  'type': 17
},
{
  'weapon_type_name': 'Armes à feu',
  'signal': 'm-Armes à feu',
  'type': 18
},
{
  'weapon_type_name': 'Magie Elfique',
  'signal': 'm-Magie Elfique',
  'type': 19
},
{
  'weapon_type_name': 'Magie runique',
  'signal': 'm-Magie runique',
  'type': 20
}];

/// Determine le gain de bonus en fonction de l'ID de la classe et de l'arme utilisée.

var MASTERY_CLASS_BONUS = [{
  'class_id': 0,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses']
},
{
  'class_id': 1,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses']
},
{
  'class_id': 2,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses']
},
{
  'class_id': 3,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses']
},
{
  'class_id': 4,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Coups']
},
{
  'class_id': 5,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Coups']
},
{
  'class_id': 6,
  'amount': 1,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 7,
  'amount': 1,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 8,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'class_id': 9,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'class_id': 10,
  'amount': 2,
  'weapon_type_names': ['Coups']
},
{
  'class_id': 11,
  'amount': 2,
  'weapon_type_names': ['Coups']
},
{
  'class_id': 12,
  'amount': 5,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 13,
  'amount': 5,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 14,
  'amount': 3,
  'weapon_type_names': ['Coups']
},
{
  'class_id': 15,
  'amount': 3,
  'weapon_type_names': ['Coups']
},
{
  'class_id': 16,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 17,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 18,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'class_id': 19,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'class_id': 20,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'class_id': 78,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'class_id': 22,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Arcs']
},
{
  'class_id': 23,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'class_id': 34,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'class_id': 26,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 27,
  'amount': 0,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 28,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 29,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 32,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 33,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 37,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Coups', 'Arcs']
},
{
  'class_id': 81,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Coups', 'Arcs']
},
{
  'class_id': 72,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Coups', 'Arcs']
},
{
  'class_id': 73,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Coups', 'Arcs']
},
{
  'class_id': 38,
  'amount': 3,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 39,
  'amount': 3,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 40,
  'amount': 3,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 84,
  'amount': 3,
  'weapon_type_names': ['Magie runique']
},
{
  'class_id': 56,
  'amount': 3,
  'weapon_type_names': ['Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'class_id': 57,
  'amount': 3,
  'weapon_type_names': ['Arcs', 'Arbalètes', 'Armes à feu']
}];

/// Determine le gain de bonus en fonction de l'ID de la race et de l'arme utilisée.

var MASTERY_RACE_BONUS = [{
  'race_id': 0,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'race_id': 1,
  'amount': 2,
  'weapon_type_names': ['Lances', 'Arbalètes',]
},
{
  'race_id': 2,
  'amount': 2,
  'weapon_type_names': ['Masses', 'Coups']
},
{
  'race_id': 3,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Arcs']
},
{
  'race_id': 4,
  'amount': 2,
  'weapon_type_names': ['Haches', 'Lances']
},
{
  'race_id': 5,
  'amount': 2,
  'weapon_type_names': ['Lances', 'Coups']
},
{
  'race_id': 6,
  'amount': 2,
  'weapon_type_names': ['Armes à feu', 'Magie runique']
},
{
  'race_id': 7,
  'amount': 2,
  'weapon_type_names': ['Magie runique']
},
{
  'race_id': 8,
  'amount': 3,
  'weapon_type_names': ['Coups']
}];

/// Determine le gain de bonus en fonction de l'ID du personnage et de l'arme utilisée.

var MASTERY_CHAR_BONUS = [{
  'char_id': 7,
  'amount': 1,
  'weapon_type_names': ['Magie Elfique']
},
{
  'char_id': 14,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Arcs']
},
{
  'char_id': 15,
  'amount': 3,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'char_id': 4,
  'amount': 2,
  'weapon_type_names': ['Magie Elfique']
},
{
  'char_id': 16,
  'amount': 2,
  'weapon_type_names': ['Lances', 'Arbalètes']
},
{
  'char_id': 1,
  'amount': 2,
  'weapon_type_names': ['Haches', 'Masses']
},
{
  'char_id': 17,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'char_id': 25,
  'amount': 3,
  'weapon_type_names': ['Magie runique']
},
{
  'char_id': 9,
  'amount': 1,
  'weapon_type_names': ['Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'char_id': 26,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Arcs']
},
{
  'char_id': 3,
  'amount': 3,
  'weapon_type_names': ['Armes à feu']
},
{
  'char_id': 10,
  'amount': 3,
  'weapon_type_names': ['Haches']
},
{
  'char_id': 18,
  'amount': 3,
  'weapon_type_names': ['Lances']
},
{
  'char_id': 6,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups']
},
{
  'char_id': 23,
  'amount': 3,
  'weapon_type_names': ['Masses']
},
{
  'char_id': 20,
  'amount': 3,
  'weapon_type_names': ['Coups']
},
{
  'char_id': 11,
  'amount': 2,
  'weapon_type_names': ['Haches', 'Arbalètes']
},
{
  'char_id': 5,
  'amount': 3,
  'weapon_type_names': ['Masses']
},
{
  'char_id': 19,
  'amount': 2,
  'weapon_type_names': ['Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'char_id': 24,
  'amount': 2,
  'weapon_type_names': ['Lances', 'Arcs']
},
{
  'char_id': 12,
  'amount': 2,
  'weapon_type_names': ['Lames', 'Haches']
},
{
  'char_id': 8,
  'amount': 1,
  'weapon_type_names': ['Coups', 'Arcs', 'Arbalètes', 'Armes à feu']
},
{
  'char_id': 21,
  'amount': 2,
  'weapon_type_names': ['Arbalètes', 'Magie runique']
},
{
  'char_id': 13,
  'amount': 1,
  'weapon_type_names': ['Lames', 'Haches', 'Lances', 'Masses', 'Coups', 'Arcs', 'Arbalètes', 'Armes à feu', 'Magie runique']
},
{
  'char_id': 22,
  'amount': 2,
  'weapon_type_names': ['Lances', 'Coups']
},
{
  'char_id': 28,
  'amount': 3,
  'weapon_type_names': ['Coups']
},
{
  'char_id': 35,
  'amount': 3,
  'weapon_type_names': ['Arcs']
},
{
  'char_id': 34,
  'amount': 3,
  'weapon_type_names': ['Coups']
},
{
  'char_id': 29,
  'amount': 3,
  'weapon_type_names': ['Lances']
},
{
  'char_id': 37,
  'amount': 3,
  'weapon_type_names': ['Lames']
}];

var MASTERY_PARAMS_ATTACK_BONUS = [{
  'rank_id': 0,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 1,
  'weapon_type_names': ['Coups'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 1,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 2,
  'weapon_type_names': ['Coups'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 2,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Coups'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 8
},
{
  'rank_id': 3,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 8
},
{
  'rank_id': 3,
  'weapon_type_names': ['Coups'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Coups'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 4,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 4,
  'weapon_type_names': ['Coups'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Coups'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 5,
  'weapon_type_names': ['Coups'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 12
},
{
  'rank_id': 5,
  'weapon_type_names': ['Coups'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 8
},
{
  'rank_id': 0,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 1,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 1,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 2,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 2,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 2,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 30
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 50
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie Elfique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 0,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Lames'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Lames'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lames'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lames'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lames'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lames'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lames'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lames'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Haches'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Haches'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Haches'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Haches'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Haches'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lames'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Haches'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Haches'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Haches'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Haches'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Haches'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Haches'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Haches'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Lances'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Lances'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Lances'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Lances'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lances'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lances'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Lances'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lances'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lances'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Lances'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lances'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lances'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Lances'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Masses'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Masses'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Masses'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Masses'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Masses'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Masses'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Masses'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Masses'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Masses'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Masses'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Masses'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Masses'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Masses'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Arcs'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Arcs'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Arcs'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Arcs'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arcs'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arcs'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arcs'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arcs'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arcs'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arcs'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arcs'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arcs'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arcs'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Arbalètes'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Armes à feu'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 0,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': -15
},
{
  'rank_id': 1,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 0
},
{
  'rank_id': 2,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 2,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 10
},
{
  'rank_id': 3,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 3
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 18
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 15
},
{
  'rank_id': 4,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 5
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'POW', // POW, HIT, CRT
  'amount': 25
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'HIT', // POW, HIT, CRT
  'amount': 20
},
{
  'rank_id': 5,
  'weapon_type_names': ['Magie runique'],
  'param_name': 'CRT', // POW, HIT, CRT
  'amount': 10
}];

var MASTERY_INCREASE_ON_ATTACK_FAILED = 1;
var MASTERY_INCREASE_ON_ATTACK_SUCCED = 2;
var MASTERY_INCREASE_ON_ATTACK_CRITIC = 3;
var MASTERY_INCREASE_ON_ENNEMY_KILLED = 5;

var MASTERY_INCREASE_ON_ELVEN_MAGIC_USED = 3;
var MASTERY_INCREASE_ON_WALL_SUMMONED = 2;