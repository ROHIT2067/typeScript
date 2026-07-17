OOP in typescript => there are 4 pillars. encapsulation, inheritance, polymorphism and abstraction
Encapsulation => bundling data + methods, restricting access via private/protected/public
Inheritance => once class extends another class
Polymorphishm => same method name, different behavior across classes    
Abstraction => hiding implementation details, exposing only essentials

Feature                             interface                                   type        
Object shape                         ✅                                         ✅  
Union types                          ❌                                         ✅
Tuple/primitive alias                ❌                                         ✅
Declaration merging         ✅(auto-merges same name)                   ❌(error on duplicate)
Extends/implements                ✅(extends, class implements)         ✅ (via & intersection, less clean)
Computed properties                   ❌                                        ✅

Generics => write resuable code that works across multiple types while preserving type sagety
