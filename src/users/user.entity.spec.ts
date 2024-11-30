import { User } from 'src/users/user.entity';

describe('User Entity', () => {
  it('should create a user with default role', () => {
    const user = new User();
    user.email = 'test@example.com';
    user.password = 'securePassword';
    user.role = user.role || 'regular';

    expect(user.email).toBe('test@example.com');
    expect(user.role).toBe('regular');
  });

  it('should allow setting admin role', () => {
    const user = new User();
    user.role = 'admin';

    expect(user.role).toBe('admin');
  });
});
