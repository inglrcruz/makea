import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAuthDto {

    @ApiProperty({ description: '', type: String })
    @IsString()
    readonly device: String;

}