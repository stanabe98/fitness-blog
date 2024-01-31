import { action, makeObservable, observable } from "mobx";

class ContentStore {
  @observable activeId: any;
  @observable zoomOn:boolean;

  constructor() {
    this.activeId = "AdjustableBench";
    this.zoomOn= true;
    makeObservable(this)
  }

  @action setActiveId = (activeId: any) => {
    this.activeId = activeId;
  };
  @action setZoomOn = (state: boolean) => {
    this.zoomOn = state;
  };
}

const contentStore= new ContentStore();

export default contentStore;
