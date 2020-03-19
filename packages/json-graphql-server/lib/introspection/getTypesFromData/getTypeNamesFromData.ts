import { ISourceDataRoot } from '../../types';
import { getTypeFromKey } from '../../utils/nameConverter';

export default function getTypeNamesFromData(data: ISourceDataRoot)
{
	return Object.keys(data).map(getTypeFromKey);
}
