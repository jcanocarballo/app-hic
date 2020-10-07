import { Timestamp } from 'rxjs';

export interface JwtResponseI {
  dataUser: {
    _id: string,
    username: string,
    name: string,
    ape_pat: string,
    ape_mat: string,
    telefono: string,
    role: string,
    last_login_date: string,
    accessToken: string,
    expiresIn: string
  }
}
