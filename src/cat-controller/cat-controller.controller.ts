import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cat-controller')
export class CatControllerController {
    @Get('cat/*')
    findAll():string {
      return "This is Hello Controller controller"
    }

    @Post("/post")
    postCat():string{
        return "this is Post Controller"
    }

    @Get(":id")
    str(@Param() params:any):string{
        return `this is ${params.id} cart`
    }
}
