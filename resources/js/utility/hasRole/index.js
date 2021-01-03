const hasRole = (user, role) => {
  if (role && (user.role_list ?? []).includes(role)) {
    return true;
  }
  return false;
};

export default hasRole;
