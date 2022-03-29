import { SimpleDisplayComp } from "@focuson/forms";
import { loadFile } from "@focuson/files";
import { ExampleMainPage } from "./generators/common";
import {addressViewMainPagePD} from "./generators/AddressView/addressView.pageD";

/* Here we need to specify our main pages */
export const generatedPages: ExampleMainPage[] = [
    addressViewMainPagePD ];
export const focusOnVersion: string = JSON.parse ( loadFile ( 'package.json' ) ).dependencies[ "@focuson/forms" ]

export let javaOutputRoot = '../formJava'
export const tsRoot = "../formTs"

const MyCombineCD: SimpleDisplayComp = { import: "@focuson/form_components", name: "MyCombined" }

export const devAppConfig = {
  fetch: "fetchWithDelay ( 1, fetchWithPrefix ( 'http://localhost:8080', loggingFetchFn ) )",
  combine: MyCombineCD,
  debug: { fetcherDebug: true, postDebug: false, Debug: true, restDebug: true }
}
