import { Role } from '@/modal/role/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    findAll(): Promise<Role[]>;
    createRole(role: Role): Promise<Role>;
    getRoleById(idRole: number): Promise<Role>;
}
