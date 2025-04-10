import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    //Antes de cada teste precisamos injetar
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('deve retornar um array de Users', async () => {
      const users = [
        { id: 1, name: 'Teste', email: 'teste@teste.com', password: 'teste' },
        { id: 2, name: 'Teste2', email: 'teste2@teste.com', password: 'teste' },
      ];

      mockRepository.find.mockResolvedValue(users);
      const result = await service.findAll();
      expect(result).toEqual(users);
    });
  });

  describe('findOneByEmail', () => {
    it('deve retoenar um user pelo email', async () => {
      const user = {
        id: 1,
        name: 'Teste',
        email: 'email@email.com',
        password: 'teste',
      };
      mockRepository.findOneBy.mockResolvedValue(user);

      const result = await service.findOneByEmail('email@email.com');
      expect(result).toEqual(user);
    });

    /*     it('deve retornar um erro se o user não for encontrado', async () => {
      const email = 'email@naoexiste.com'
      mockRepository.findOneBy.mockResolvedValue(undefined)

      await expect(service.findOneByEmail(email))
    })  Confirmar resto do código */
  });

  describe('create', () => {
    it('Deve criar novo user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'Teste',
        email: 'teste@teste.com',
        password: 'senha',
      };

      const hashSenha = 'senhaHash';
      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashSenha);
      const user = { id: 1, ...createUserDto, password: hashSenha };

      mockRepository.create.mockReturnValue(user);
      mockRepository.save.mockResolvedValue(user);
    });
  });
});
