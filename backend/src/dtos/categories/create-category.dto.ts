import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {

    @ApiProperty({ description: '', type: String })
    @IsString()
    readonly name: String;

}