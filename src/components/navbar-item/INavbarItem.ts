export interface INavbarItem {
  customClassName: string;
  onClick?       : () => void;
  text           : string;
  href           : string;
}