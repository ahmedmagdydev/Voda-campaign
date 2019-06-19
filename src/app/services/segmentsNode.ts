export interface segmentsNode {
  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: segmentsNode[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: segmentsNode;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
  key?: string;

  open?: boolean;
  id?: any;
  versions?: any;
}
