import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCatalogueDto {

    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly name: Number;
    
    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly description: Number;

    @ApiProperty({ description: '', type: Number })
    @IsNumber()
    readonly price: Number;
}