import { helper } from '@ember/component/helper';

const equals = (params) => params[0] === params[1];

export default helper(equals);
