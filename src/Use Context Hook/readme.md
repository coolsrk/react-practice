# useContext() hook

- Usecase: 
    - There is one concept known as "props drilling".
    - When there is requirement that we have to pass props from parent to 5 level down child, we have to pass those props through each children lie in between those two components unnecessarily.
    - Even lifting the state up becomes very complicated in this case.
    - So, to tackele this issue, we must use some centralised place which would keep track of the data which is needed across multiple components, without passing it through props.

- Ans ? useContext() hook!

- Three things happen while using useContext(), 
    1. Create context
        - const <..> = createContext();
    2. Provide context
        - <ContextName.Provider value = {pass_data_here} />
    3. Consume context
        - const someContext = *useContext(ContextName)*;
- To see example, Run Main.js.


# Open Questions

- How to dynamically loads css or pass css to components?
