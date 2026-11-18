import { Controller, Get } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    
    @Get()
    getEmployee(){
        return 'user data fatched successfully';
    }
}
