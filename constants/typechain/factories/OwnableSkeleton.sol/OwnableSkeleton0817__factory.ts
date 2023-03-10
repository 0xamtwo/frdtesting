/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OwnableSkeleton0817,
  OwnableSkeleton0817Interface,
} from "../../OwnableSkeleton.sol/OwnableSkeleton0817";

const _abi = [
  {
    inputs: [],
    name: "ONLY_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PENDING_OWNER",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "potentialNewOwner",
        type: "address",
      },
    ],
    name: "OwnerPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50608f8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638da5cb5b14602d575b600080fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f3fea2646970667358221220cbf2072133c63fae1bc3effce0630fa8d91d08b56533db468409124f4530d4f064736f6c63430008110033";

type OwnableSkeleton0817ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableSkeleton0817ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableSkeleton0817__factory extends ContractFactory {
  constructor(...args: OwnableSkeleton0817ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnableSkeleton0817> {
    return super.deploy(overrides || {}) as Promise<OwnableSkeleton0817>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnableSkeleton0817 {
    return super.attach(address) as OwnableSkeleton0817;
  }
  override connect(signer: Signer): OwnableSkeleton0817__factory {
    return super.connect(signer) as OwnableSkeleton0817__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableSkeleton0817Interface {
    return new utils.Interface(_abi) as OwnableSkeleton0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableSkeleton0817 {
    return new Contract(address, _abi, signerOrProvider) as OwnableSkeleton0817;
  }
}
