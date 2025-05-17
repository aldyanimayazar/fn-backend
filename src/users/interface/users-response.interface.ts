import { UserType } from 'src/roles/enum/roles.enum';

import {
  ActivationStatus,
  VerifiedStatus,
} from '../enum/activation-status.enum';
import { IRoles } from 'src/roles/interface/roles.interface';

export interface IUsersResponse {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePicture: string;
  roles: IRoles;
  activationStatus: ActivationStatus;
  verifiedStatus: VerifiedStatus;
}
