// contacts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const newContact = new this.contactModel(createContactDto);
    return newContact.save();
  }
  
}
