/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: true */
export = (sequelize, { STRING, INTEGER, BOOLEAN }) => {
  const Challenge = sequelize.define('Challenge', {
    key: STRING,
    name: STRING,
    category: STRING,
    tags: STRING,
    description: STRING,
    difficulty: INTEGER,
    hint: STRING,
    hintUrl: STRING,
    mitigationUrl: STRING,
    solved: BOOLEAN,
    disabledEnv: STRING,
    tutorialOrder: INTEGER,
    codingChallengeStatus: INTEGER
  })
  return Challenge
}
