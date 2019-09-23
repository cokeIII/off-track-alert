"use strict";
/**
 * Copyright 2018 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const gcpMetadata = require("gcp-metadata");
var GCPEnv;
(function (GCPEnv) {
    GCPEnv["APP_ENGINE"] = "APP_ENGINE";
    GCPEnv["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
    GCPEnv["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
    GCPEnv["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
    GCPEnv["NONE"] = "NONE";
})(GCPEnv = exports.GCPEnv || (exports.GCPEnv = {}));
let env;
function clear() {
    env = undefined;
}
exports.clear = clear;
async function getEnv() {
    if (!env) {
        if (isAppEngine()) {
            env = GCPEnv.APP_ENGINE;
        }
        else if (isCloudFunction()) {
            env = GCPEnv.CLOUD_FUNCTIONS;
        }
        else if (await isKubernetesEngine()) {
            env = GCPEnv.KUBERNETES_ENGINE;
        }
        else if (await isComputeEngine()) {
            env = GCPEnv.COMPUTE_ENGINE;
        }
        else {
            env = GCPEnv.NONE;
        }
    }
    return env;
}
exports.getEnv = getEnv;
function isAppEngine() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
}
function isCloudFunction() {
    return !!process.env.FUNCTION_NAME;
}
async function isKubernetesEngine() {
    try {
        await gcpMetadata.instance('attributes/cluster-name');
        return true;
    }
    catch (e) {
        return false;
    }
}
async function isComputeEngine() {
    return gcpMetadata.isAvailable();
}
//# sourceMappingURL=envDetect.js.map