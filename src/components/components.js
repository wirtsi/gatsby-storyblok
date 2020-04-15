import Page from "./page";
import Grid from "./grid";
import Teaser from "./teaser";
import Feature from "./feature";
import NavItem from "./nav_item";
import ContentStage from "./ContentStage";
import ComponentNotFound from "./component_not_found";

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  ContentStage: ContentStage
};

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;

