// Programming Languages Genealogy Data
// This file contains comprehensive data about programming languages,
// their introduction years, and genealogy relationships

const programmingLanguagesData = {
    name: "Machine Language",
    year: 1940,
    description: "The earliest form of programming - direct binary instructions to processors",
    genealogy: "Foundation of all programming languages",
    era: "First Generation",
    children: [
        {
            name: "Assembly Language",
            year: 1947,
            description: "Human-readable mnemonics for machine instructions",
            genealogy: "Direct descendant of Machine Language",
            era: "Second Generation",
            children: [
                {
                    name: "FORTRAN",
                    year: 1954,
                    description: "Formula Translation - First high-level language for scientific computing",
                    genealogy: "Influenced by Assembly, mathematical notation; influenced COBOL, BASIC, ALGOL",
                    era: "Third Generation",
                    children: [
                        {
                            name: "COBOL",
                            year: 1959,
                            description: "Common Business-Oriented Language",
                            genealogy: "Influenced by FORTRAN and FLOW-MATIC; still used in enterprise systems",
                            era: "Third Generation"
                        },
                        {
                            name: "BASIC",
                            year: 1964,
                            description: "Beginner's All-purpose Symbolic Instruction Code",
                            genealogy: "Influenced by FORTRAN and ALGOL; designed for education",
                            era: "Third Generation",
                            children: [
                                {
                                    name: "Visual Basic",
                                    year: 1991,
                                    description: "Event-driven programming with GUI",
                                    genealogy: "Evolution of BASIC with Windows integration",
                                    era: "Fourth Generation"
                                },
                                {
                                    name: "VB.NET",
                                    year: 2001,
                                    description: "Object-oriented successor to Visual Basic",
                                    genealogy: "VB redesigned for .NET framework",
                                    era: "Modern"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "LISP",
                    year: 1958,
                    description: "LISt Processing - AI and symbolic computation",
                    genealogy: "Influenced by Lambda Calculus; influenced functional programming paradigm",
                    era: "Third Generation",
                    children: [
                        {
                            name: "Scheme",
                            year: 1975,
                            description: "Minimalist, lexically scoped dialect of LISP",
                            genealogy: "Simplified LISP; influenced JavaScript closures and Ruby blocks",
                            era: "Fourth Generation"
                        },
                        {
                            name: "Common Lisp",
                            year: 1984,
                            description: "Standardized, feature-rich LISP",
                            genealogy: "Consolidation of various LISP dialects",
                            era: "Fourth Generation",
                            children: [
                                {
                                    name: "Clojure",
                                    year: 2007,
                                    description: "Modern LISP for JVM with concurrency focus",
                                    genealogy: "LISP heritage with Java interoperability",
                                    era: "Modern"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "ALGOL 60",
            year: 1960,
            description: "Algorithmic Language - introduced block structure",
            genealogy: "Influenced by FORTRAN; established structured programming concepts",
            era: "Third Generation",
            children: [
                {
                    name: "Simula",
                    year: 1967,
                    description: "First object-oriented programming language",
                    genealogy: "Extended ALGOL 60; introduced classes and objects",
                    era: "Third Generation",
                    children: [
                        {
                            name: "Smalltalk",
                            year: 1972,
                            description: "Pure object-oriented environment",
                            genealogy: "Refined Simula concepts; influenced modern OOP",
                            era: "Third Generation",
                            children: [
                                {
                                    name: "Objective-C",
                                    year: 1984,
                                    description: "C with Smalltalk-style messaging",
                                    genealogy: "Hybrid of C syntax and Smalltalk OOP",
                                    era: "Fourth Generation",
                                    children: [
                                        {
                                            name: "Swift",
                                            year: 2014,
                                            description: "Modern, safe systems programming for Apple platforms",
                                            genealogy: "Successor to Objective-C; influenced by Rust, Haskell, Python",
                                            era: "Modern"
                                        }
                                    ]
                                },
                                {
                                    name: "Ruby",
                                    year: 1995,
                                    description: "Dynamic, expressive object-oriented language",
                                    genealogy: "Influenced by Smalltalk, Perl, Lisp; emphasizes programmer happiness",
                                    era: "Modern"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Pascal",
                    year: 1970,
                    description: "Structured programming with strong typing",
                    genealogy: "Based on ALGOL 60; emphasized structured programming",
                    era: "Third Generation",
                    children: [
                        {
                            name: "Ada",
                            year: 1980,
                            description: "High-integrity systems programming",
                            genealogy: "Based on Pascal; designed for US Department of Defense",
                            era: "Fourth Generation"
                        },
                        {
                            name: "Delphi",
                            year: 1995,
                            description: "Object Pascal with visual development",
                            genealogy: "Object-oriented extension of Pascal with RAD tools",
                            era: "Modern"
                        }
                    ]
                },
                {
                    name: "C",
                    year: 1972,
                    description: "System programming language with manual memory management",
                    genealogy: "Influenced by ALGOL and B; became foundation for modern programming",
                    era: "Third Generation",
                    children: [
                        {
                            name: "C++",
                            year: 1985,
                            description: "C with classes and object-oriented features",
                            genealogy: "Extended C with OOP; influenced by Simula",
                            era: "Fourth Generation",
                            children: [
                                {
                                    name: "Java",
                                    year: 1995,
                                    description: "Platform-independent OOP with garbage collection",
                                    genealogy: "Influenced by C++, Smalltalk; simplified C++ complexity",
                                    era: "Modern",
                                    children: [
                                        {
                                            name: "Kotlin",
                                            year: 2011,
                                            description: "Modern JVM language with improved syntax",
                                            genealogy: "Interoperable with Java; influenced by Scala, C#",
                                            era: "Modern"
                                        }
                                    ]
                                },
                                {
                                    name: "C#",
                                    year: 2000,
                                    description: "Microsoft's managed OOP language",
                                    genealogy: "Influenced by C++, Java, Delphi; part of .NET ecosystem",
                                    era: "Modern",
                                    children: [
                                        {
                                            name: "F#",
                                            year: 2005,
                                            description: "Functional-first language for .NET",
                                            genealogy: "ML family language adapted for .NET",
                                            era: "Modern"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Perl",
                            year: 1987,
                            description: "Practical Extraction and Report Language",
                            genealogy: "Influenced by C, shell scripting, AWK; emphasized text processing",
                            era: "Fourth Generation",
                            children: [
                                {
                                    name: "PHP",
                                    year: 1995,
                                    description: "Web-focused scripting language",
                                    genealogy: "Influenced by Perl, C; designed for web development",
                                    era: "Modern"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "ML",
            year: 1973,
            description: "Meta Language - functional programming with type inference",
            genealogy: "Influenced by LISP; established modern functional programming",
            era: "Third Generation",
            children: [
                {
                    name: "Haskell",
                    year: 1990,
                    description: "Pure functional programming with lazy evaluation",
                    genealogy: "Influenced by ML, Miranda; purely functional paradigm",
                    era: "Fourth Generation"
                },
                {
                    name: "OCaml",
                    year: 1996,
                    description: "Object-oriented extension of ML",
                    genealogy: "Extended ML with object-oriented features",
                    era: "Modern"
                }
            ]
        },
        {
            name: "Python",
            year: 1991,
            description: "High-level, interpreted language emphasizing readability",
            genealogy: "Influenced by ABC, Modula-3, Smalltalk, C; emphasizes simplicity",
            era: "Modern"
        },
        {
            name: "JavaScript",
            year: 1995,
            description: "Dynamic scripting language for web browsers",
            genealogy: "Influenced by Scheme (functions), Self (prototypes), Java (syntax)",
            era: "Modern",
            children: [
                {
                    name: "TypeScript",
                    year: 2012,
                    description: "Statically typed superset of JavaScript",
                    genealogy: "Extended JavaScript with static typing and modern features",
                    era: "Modern"
                }
            ]
        },
        {
            name: "Go",
            year: 2009,
            description: "Systems programming with garbage collection and concurrency",
            genealogy: "Influenced by C, Pascal, CSP; designed at Google for modern systems",
            era: "Modern"
        },
        {
            name: "Rust",
            year: 2010,
            description: "Systems programming with memory safety without garbage collection",
            genealogy: "Influenced by C++, ML, Haskell; focuses on safety and performance",
            era: "Modern"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = programmingLanguagesData;
}