import { toChecksumAddress } from 'ethereumjs-util';
import { tlc } from './general';
import { DAPPS_CONFIG } from "../config/dapp"
import { t } from "../i18n"

const { supportedTLDs } = DAPPS_CONFIG;

/**
 * Returns full checksummed address
 *
 * @param {String} address - String corresponding to an address
 * @returns {String} - String corresponding to full checksummed address
 */
export function renderFullAddress(address) {
	return address ? toChecksumAddress(address) : t('transactions.TxDetailsNotAvailable');
}

/**
 * Returns short address format
 *
 * @param {String} address - String corresponding to an address
 * @param {Number} chars - Number of characters to show at the end and beginning.
 * Defaults to 4.
 * @returns {String} - String corresponding to short address format
 */
export function renderShortAddress(address, chars = 4) {
	if (!address) return address;
	const checksummedAddress = toChecksumAddress(address);
	// return `${checksummedAddress.substr(0, chars + 2)}...${checksummedAddress.substr(-chars)}`;
	return checksummedAddress ? `${checksummedAddress.slice(0, 4) }...${ checksummedAddress.substring(checksummedAddress.length - 4) }` : ""
}

/**
 * Returns address name if it's in known identities
 *
 * @param {String} address - String corresponding to an address
 * @param {Object} identities - Identities object
 * @returns {String} - String corresponding to account name. If there is no name, returns the original short format address
 */
export function renderAccountName(address, identities) {
	address = safeToChecksumAddress(address);
	if (identities && address && address in identities) {
		return identities[address].name;
	}
	return renderShortAddress(address);
}

// /**
//  * Imports a an account from a private key
//  *
//  * @param {String} privateKey - String corresponding to a private key
//  * @returns {Promise} - Returns a promise
//  */
//
// export async function importAccountFromPrivateKey(privateKey) {
// 	// Import private key
// 	let pkey = privateKey;
// 	// Handle PKeys with 0x
// 	if (pkey.length === 66 && pkey.substr(0, 2) === '0x') {
// 		pkey = pkey.substr(2);
// 	}
// 	const { KeyringController } = Engine.context;
// 	return KeyringController.importAccountWithStrategy('privateKey', [pkey]);
// }

/**
 * Validates an ENS name
 *
 * @param {String} name - String corresponding to an ENS name
 * @returns {boolean} - Returns a boolean indicating if it is valid
 */
export function isENS(name) {
	const OFFSET = 1;
	const index = name && name.lastIndexOf('.');
	const tld = index && index >= OFFSET && tlc(name.substr(index + OFFSET, name.length - OFFSET));
	if (index && tld && supportedTLDs.includes(tld)) return true;
	return false;
}

/**
 * Determines if a given string looks like a valid Ethereum address
 *
 * @param {address} string
 */
export function resemblesAddress(address) {
	return address.length === 2 + 20 * 2;
}

export function safeToChecksumAddress(address) {
	if (!address) return undefined;
	return toChecksumAddress(address);
}