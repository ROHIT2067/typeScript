Phase 1 — core type syntax (build on each other directly)
1. type definition of array✅
2. type definition of object✅
3. tuple✅
4. union types✅
5. type keyword (type aliases)✅
6. interface (compare against type alias — when to use which)✅

Phase 2 — generics (MISSING from your list, added — required for #9, #10, #16)
7. generics (functions, classes, constraints)

Phase 3 — built on generics/interfaces
8. utility types (overview: Partial, Omit, Pick, etc.)
9. promise (Promise<T> is itself a generic — this is why it comes after generics, not with your basic type defs)
10. decorators (unrelated feature area, needs classes understood — put last of theory since it's the least commonly used in practice)

Phase 4 — applied practice, ordered to match phase 1-3 dependencies
11. abstraction using interface
12. class from interface (direct extension of #11)
13. abstraction using abstract class
14. method overriding
15. method overloading (TS overloading ≠ classic OOP overloading — it's multiple signatures, one implementation; don't assume it works like Java/C++)
16. generic function implementation [reverse/filter/sum]
17. type assertion example
18. partial example
19. omit example
20. custom decorator
✅