import { Injectable } from '@angular/core';
import { APIClient } from './api-client';
import { Todo } from 'src/app/models/todo.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class TodoApi {
    constructor(private apiclient: APIClient){

    }

    getAllTodos(search: string = ''){
        let params = new HttpParams().set('search', search);
        return this.apiclient.get<Todo[]>('api/todos', {params: params});
    }
}