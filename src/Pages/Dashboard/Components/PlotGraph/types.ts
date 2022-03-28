export interface PlotGraphChartProps {
  data: { x: string; y: number }[];
  caseName: string;
}

export interface AutoCompleteOption<T = string> {
  label: string;
  value: T;
}
