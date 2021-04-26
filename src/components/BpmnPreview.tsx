import React, { CSSProperties } from "react";
import BpmnJS from "bpmn-js/dist/bpmn-navigated-viewer.development.js";

type BpmnProps = {
  url?: string;
  style?: CSSProperties;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
  xml?: string;
};
type BpmnState = {
  diagramXML?: string;
};

export class BpmnPreview extends React.Component<BpmnProps, BpmnState> {
  containerRef: React.RefObject<any>;
  bpmnViewer: any;

  constructor(props) {
    super(props);

    this.state = {};

    this.containerRef = React.createRef();
  }

  addOverlay(tokenPosition: string, content: string) {
    const overlays = this.bpmnViewer.get("overlays");

    return overlays.add(tokenPosition, {
      position: {
        top: 20,
        left: 20
      },
      html: `
        <div class="token token-count">
          <div class="text">${content}</div>
        <div>
      `
    });
  }
  addOverlays() {
    const elementRegistry = this.bpmnViewer.get("elementRegistry");
    this.addOverlay(elementRegistry.getAll()[20].id, 1);
    this.addOverlay(elementRegistry.getAll()[25].id, 2);
  }

  componentDidMount() {
    const { url, xml: diagramXML } = this.props;

    const container = this.containerRef.current;

    this.bpmnViewer = new BpmnJS({ container });

    this.bpmnViewer.on("import.done", event => {
      try {
        this.addOverlays();
      } catch (e) {}
      const { error, warnings } = event;

      if (error) {
        return this.handleError(error);
      }

      this.bpmnViewer.get("canvas").zoom("fit-viewport");

      return this.handleShown(warnings);
    });

    if (url) {
      this.fetchDiagram(url);
    } else if (diagramXML) {
      this.setState({ diagramXML });
    }
  }

  componentWillUnmount() {
    this.bpmnViewer.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    const { props, state } = this;

    if (props.url !== prevProps.url) {
      return this.fetchDiagram(props.url);
    }

    if (state.diagramXML !== prevState.diagramXML) {
      return this.bpmnViewer.importXML(state.diagramXML);
    }
  }

  fetchDiagram(url) {
    this.handleLoading();

    fetch(url)
      .then(response => response.text())
      .then(text => this.setState({ diagramXML: text }))
      .catch(err => this.handleError(err));
  }

  handleLoading() {
    const { onLoading } = this.props;

    if (onLoading) {
      onLoading();
    }
  }

  handleError(err) {
    const { onError } = this.props;

    if (onError) {
      onError(err);
    }
  }

  handleShown(warnings) {
    const { onShown } = this.props;

    if (onShown) {
      onShown(warnings);
    }
  }

  render() {
    return (
      <div
        className="react-bpmn-diagram-container"
        style={this.props.style}
        ref={this.containerRef}
      />
    );
  }
}
