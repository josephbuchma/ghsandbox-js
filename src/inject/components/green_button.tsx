import * as React from "react";
import { NoIOFunc } from "../utils/types";

export interface GreenButtonProps { click: NoIOFunc }

export class GreenButton extends React.Component<GreenButtonProps, undefined> {
  render() {
    return (
      <button onClick={this.props.click}
            className="btn btn-sm btn-primary"
            title="Sandbox"
            type="button"
      >
        <span>Sandbox</span>
      </button>
    )
  }
}
