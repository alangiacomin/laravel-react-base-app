import hasRole from '../hasRole';

const hasPermission = (user, perm) => {
  if (perm && perm.startsWith('special_')) {
    switch (perm.substring(8)) {
      case 'guests_only':
        return !(user.id > 0);
      case 'users_only':
        return user.id > 0;
      default:
        return false;
    }
  }
  if (hasRole(user, 'admin')) {
    return true;
  }
  if (perm && !(user.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
};

export default hasPermission;
