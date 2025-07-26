import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { SoftwaresService } from './softwares.service';
import { GetSoftwareDto } from './dto/get-software.dto';

@Controller('softwares')
export class SoftwaresController {
  constructor(private readonly softwareService: SoftwaresService) {}

  @Get(':id')
  async getSoftwareById(@Param() params: GetSoftwareDto) {
    const software = await this.softwareService.findById(params.id);
    if (!software) {
      throw new NotFoundException('Không tìm thấy phần mềm phù hợp');
    }
    return software;
  }
}
