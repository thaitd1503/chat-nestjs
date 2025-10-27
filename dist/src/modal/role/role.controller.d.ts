import { RoleService } from './role.service';
import { Role } from '@/modal/role/role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    getAllRole(): Promise<Role[]>;
    createRole(role: Role): Promise<Role>;
    getRoleById(id: number): Promise<Role>;
}
