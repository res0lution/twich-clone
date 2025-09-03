import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import type { User } from '@/prisma/generated'

import { AccountService } from './account.service'
import { ChangeEmailInput } from './inputs/change-email.input'
import { ChangePasswordInput } from './inputs/change-password.input'
import { CreateUserInput } from './inputs/create-user.input'
import { UserModel } from './models/user.model'

@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Query(() => UserModel, { name: 'findProfile' })
	public async me(id: string) {
		return this.accountService.me(id)
	}

	@Mutation(() => Boolean, { name: 'createUser' })
	public async create(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input)
	}

	@Mutation(() => Boolean, { name: 'changeEmail' })
	public async changeEmail(
		user: User,
		@Args('data') input: ChangeEmailInput
	) {
		return this.accountService.changeEmail(user, input)
	}

	@Mutation(() => Boolean, { name: 'changePassword' })
	public async changePassword(
		user: User,
		@Args('data') input: ChangePasswordInput
	) {
		return this.accountService.changePassword(user, input)
	}
}
