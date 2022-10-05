import { Body, Get, Param, Patch, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService){}
    @Post()
    createTodo(@Body()body: CreateTodoDto){
        return this.todosService.create(body);
    }
    @Get()
    findTodos(){
        return this.todosService.find();
    }
    @Get('/:id')
    findTodoById(@Param('id') id: number){
        return this.todosService.findOne(id);
    }
    @Patch('/:id')
    updateTodoStatus(@Param('id') id: number){
        return this.todosService.update(id);
        
    }
}
