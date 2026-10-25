---
title: "7.3 Operations on Objects"
description: "JavaScript, 7.3 Operations on Objects: 7.3.1 MakeBasicObject ( internalSlotsList ), 7.3.2 Get ( O , P ), 7.3.3 GetV ( V , P ), 7.3.4 Set ( O , P , V , Throw ), 7.3.5 CreateDataProperty ( O , P , V ), 7.3.6 CreateDataPropertyOrThrow ( O , P , V ), 7.3.7 CreateNonEnumerableDataPropertyOrThrow ( O , P , V ), 7.3.8 DefinePropertyOrThrow ( O , P , desc ), 7.3.9 DeletePropertyOrThrow ( O , P ), 7.3.10 GetMethod ( V , P ), 7.3.11 HasProperty ( O , P ), 7.3.12 HasOwnProperty ( O , P ), 7.3.13 Call ( F , V [ , argumentsList ] ), 7.3.14 Construct ( F [ , argumentsList [ , newTarget ] ] ), 7.3.15 SetIntegrityLevel ( O , level ), 7.3.16 TestIntegrityLevel ( O , level ), 7.3.17 CreateArrayFromList ( elements ), 7.3.18 LengthOfArrayLike ( obj ), 7.3.19 CreateListFromArrayLike ( obj [ , validElementTypes ] ), 7.3.20 Invoke ( V , P [ , argumentsList ] ), 7.3.21 OrdinaryHasInstance ( C , O ), 7.3.22 Spec"
ms.date: 2026-10-25
---

# 7.3 Operations on Objects

Sources: [ECMAScript 2026 Language Specification (ECMA-262), 7.3 Operations on Objects](https://262.ecma-international.org/#sec-operations-on-objects).

Parts:

- 7.3.1 MakeBasicObject ( internalSlotsList )
- 7.3.2 Get ( O , P )
- 7.3.3 GetV ( V , P )
- 7.3.4 Set ( O , P , V , Throw )
- 7.3.5 CreateDataProperty ( O , P , V )
- 7.3.6 CreateDataPropertyOrThrow ( O , P , V )
- 7.3.7 CreateNonEnumerableDataPropertyOrThrow ( O , P , V )
- 7.3.8 DefinePropertyOrThrow ( O , P , desc )
- 7.3.9 DeletePropertyOrThrow ( O , P )
- 7.3.10 GetMethod ( V , P )
- 7.3.11 HasProperty ( O , P )
- 7.3.12 HasOwnProperty ( O , P )
- 7.3.13 Call ( F , V [ , argumentsList ] )
- 7.3.14 Construct ( F [ , argumentsList [ , newTarget ] ] )
- 7.3.15 SetIntegrityLevel ( O , level )
- 7.3.16 TestIntegrityLevel ( O , level )
- 7.3.17 CreateArrayFromList ( elements )
- 7.3.18 LengthOfArrayLike ( obj )
- 7.3.19 CreateListFromArrayLike ( obj [ , validElementTypes ] )
- 7.3.20 Invoke ( V , P [ , argumentsList ] )
- 7.3.21 OrdinaryHasInstance ( C , O )
- 7.3.22 SpeciesConstructor ( O , defaultConstructor )
- 7.3.23 EnumerableOwnProperties ( O , kind )
- 7.3.24 GetFunctionRealm ( obj )
- 7.3.25 CopyDataProperties ( target , source , excludedItems )
- 7.3.26 PrivateElementFind ( O , P )
- 7.3.27 PrivateFieldAdd ( O , P , value )
- 7.3.28 PrivateMethodOrAccessorAdd ( O , method )
- 7.3.29 HostEnsureCanAddPrivateElement ( O )
- 7.3.30 PrivateGet ( O , P )
- 7.3.31 PrivateSet ( O , P , value )
- 7.3.32 DefineField ( receiver , fieldRecord )
- 7.3.33 InitializeInstanceElements ( O , constructor )
- 7.3.34 AddValueToKeyedGroup ( groups , key , value )
- 7.3.35 GroupBy ( items , callback , keyCoercion )
- 7.3.36 GetOptionsObject ( options )
- 7.3.37 SetterThatIgnoresPrototypeProperties ( thisValue , home , p , v )

Not written yet.
