/// <reference path="foo.d.ts" />
/// <reference path="bar.d.ts" />

interface Petstore {
    findPets(parameters : {
        'tags': Array<string>
        'limit': number
    }): ng.IPromise<Array<pet>>;

    addPet(parameters : {
        'pet': newPet
    }): ng.IPromise<pet>;

    findOwnerById(parameters : {
        'id': number
    }): ng.IPromise<FindOwnerByIdResponse>;

    findPetById(parameters : {
        'id': number
    }): ng.IPromise<pet>;

    deletePet(parameters : {
        'id': number
    }): ng.IPromise<any>;

}

// data types
interface FindOwnerByIdResponse {
    'id': number
    'name': string
}

interface pet {
    'id': number
    'name': string
    'owner-name'?: string
    'tag'?: string
    'size'?: 'big' | 'small'
}

interface newPet {
    'id': number
    'name': string
    'owner-name': string
    'tag': string
}

interface requiredPet {
    'id': number
    'name': string
    'owner-name'?: string
    'tag'?: string
}

interface errorModel {
    'code': number
    'message': string
}

