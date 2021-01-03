const hasStrictPermission = (user, perm) => {
  if (perm && !(user.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
};

export default hasStrictPermission;
