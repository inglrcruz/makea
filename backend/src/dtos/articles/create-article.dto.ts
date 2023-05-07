import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateArticleDto {

    @ApiProperty({ description: '', type: String })
    @IsString()
    readonly name: String;

    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly categoryId: Number;

    @ApiProperty({ description: '', type: String })
    @IsString()
    readonly description: String;

    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly price: Number;

}