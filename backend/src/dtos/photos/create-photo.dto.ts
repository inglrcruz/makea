import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber } from "class-validator";

export class CreatePhotoDto {

    @ApiProperty({ description: '', type: Array })
    @IsArray()
    readonly photos: [];

    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly aid: Number;

}