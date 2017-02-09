import { camelizeKeys } from 'humps';
import policies from './policies';

export default ({ coverageAmount, termInYears }) => {
  return camelizeKeys(policies[coverageAmount.toString()][termInYears.toString()]);
};
