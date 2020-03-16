import { camelize, pluralize } from 'inflection';

export default function camelizePluralize(name: string)
{
	return camelize(pluralize(name))
}
