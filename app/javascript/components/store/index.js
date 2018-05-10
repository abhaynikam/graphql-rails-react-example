import { getHeaders } from '../common';

export const Store = (function() {
  function save(key, value) {
    this[key] = value;
  }

  function populateFromProps(props) {
    const { userToken, organization_id } = props;

    if (userToken) this.save('headers', getHeaders(userToken));

    if (organization_id) this.save('organization_id', organization_id);
  }

  return {
    save: save,
    populateFromProps: populateFromProps,
  };
})();
