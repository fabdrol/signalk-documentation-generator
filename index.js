'use strict'

/*
 * Copyright 2016 Fabian Tollenaar <fabian@decipher.industries>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARrRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * USAGE:
 *  new Parser({
 *    definitions: './schema/definitions.json',
 *    entry: './schema/signalk.json',
 *    output: './build',
 *    debug: false
 *  })
 */

module.exports = require('./lib/Parser')
