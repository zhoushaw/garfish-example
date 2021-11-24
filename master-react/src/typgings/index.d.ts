import { Garfish } from "garfish/es";

declare global {
  interface Window {
    Garfish: Garfish;
  }
}
