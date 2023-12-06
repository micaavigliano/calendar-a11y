import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  // Add more fields as needed
}

const CRUDApp: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [editedItem, setEditedItem] = useState<Partial<Item> | null>(null);

  const addItem = () => {
    if (itemName.trim() !== '' && itemDescription.trim() !== '') {
      const newItem: Item = {
        id: items.length + 1,
        name: itemName.trim(),
        description: itemDescription.trim(),
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemDescription('');
    }
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const startEditing = (id: number, item: Item) => {
    setEditItemId(id);
    setEditedItem({ ...item });
  };

  const cancelEditing = () => {
    setEditItemId(null);
    setEditedItem(null);
  };

  const saveEditedItem = () => {
    if (editedItem) {
      const updatedItems = items.map(item =>
        item.id === editedItem.id ? { ...editedItem } : item
      );
      setItems(updatedItems as Item[]);
      setEditItemId(null);
      setEditedItem(null);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Enter item description"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editedItem?.name}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editedItem?.description}
                  onChange={(e) =>
                    setEditedItem({
                      ...editedItem,
                      description: e.target.value,
                    })
                  }
                />
                <button onClick={saveEditedItem}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <span>Name: {item.name}</span>
                <span>Description: {item.description}</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button onClick={() => startEditing(item.id, item)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDApp;
