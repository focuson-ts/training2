import { AllGuardCreator, generate, makeButtons, params } from "@focuson/forms";
import *  as fse from "fs-extra";
import { devAppConfig, focusOnVersion, generatedPages, javaOutputRoot, tsRoot } from "./focuson.config";

generate ( 'detailed', devAppConfig, { ...params, focusOnVersion }, javaOutputRoot, tsRoot, AllGuardCreator, makeButtons () ) ( generatedPages )
// fse.copySync ( 'src/components', tsRoot + "/src/components" )
fse.copySync ( 'src/formComponents', tsRoot + "/src/formComponents" )
