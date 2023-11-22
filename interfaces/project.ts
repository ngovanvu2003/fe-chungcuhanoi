export interface IProject {
  _id?: number | string;
  project_name: string;
  project_acreage: number;
  project_price: number;
  project_location: string;
  project_district: string;
  project_view: number;
  project_room: number;
  project_image: Array<string>;
  status: Array<string>;
}
