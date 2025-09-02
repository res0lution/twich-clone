import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import type { User } from '@/prisma/generated'

import { AccountService } from './account.service'

@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}
}
