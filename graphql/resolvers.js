import { merge } from 'lodash';

import { resolvers as Org } from './org/resolvers';
import { resolvers as Person } from './person/resolvers'
import { resolvers as User } from './user/resolvers'
import { resolvers as Mentoring } from './mentoring/resolvers'
import { resolvers as Learning } from './mentoring/resolvers'
import { resolvers as Service } from './mentoring/resolvers'

import { resolvers as RootQuery } from './root-query/resolvers'
import { resolvers as RootMutation } from './root-query/mutation'


// Merge all of the resolver objects together
const resolvers = merge(RootQuery, RootMutation, Org, Person, User, Mentoring, Learning, Service);
                       
export default resolvers